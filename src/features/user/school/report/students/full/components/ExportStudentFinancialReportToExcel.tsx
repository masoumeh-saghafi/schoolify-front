import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

import { identityTypeOptions } from '../validation/baseTypes'
import type ListStudentReportEntity from '../types/api/ListStudentReportEntity'


const toPersianDigits = (str: string): string =>
  str.replace(/\d/g, d => String.fromCharCode(d.charCodeAt(0) + 1728))

const formatValue = (val: any): string =>
  val !== null && val !== undefined ? toPersianDigits(String(val)) : ''

interface ExportStudentFinancialReportParams {
  student: ListStudentReportEntity
}

export const exportStudentFinancialReportToExcel = async ({
  student
}: ExportStudentFinancialReportParams) => {
  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet('گزارش مالی دانش‌آموز')

  sheet.properties.defaultRowHeight = 30

  const commonStyle = {
    alignment: { vertical: 'middle', horizontal: 'center', wrapText: true },
    font: { name: 'Tahoma', size: 11 },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    }
  }

  sheet.columns = [
    { width: 12.12 },
    { width: 13.37 },
    { width: 9.87 },
    { width: 8.87 },
    { width: 12.09 },
    { width: 13.09 },
    { width: 11.12 }
  ]

  let r = 1

  const addMergedHeader = (title: string) => {
    sheet.mergeCells(`A${r}:G${r}`)
    const cell = sheet.getCell(`A${r}`)
    cell.value = title
    sheet.getRow(r).height = 30
    Object.assign(cell, commonStyle)
    cell.font = { ...cell.font, bold: true, size: 12 }
    r++
  }

  const addRow = (
    values: any[],
    options: { bold?: boolean; height?: number } = {}
  ) => {
    const row = sheet.addRow(values)
    row.height = options.height ?? 30
    row.eachCell(cell => {
      Object.assign(cell, commonStyle)
      if (options.bold) cell.font = { ...cell.font, bold: true }
    })
    r++
  }

  /* -------------------- مشخصات دانش‌آموز -------------------- */
  addMergedHeader('مشخصات دانش‌آموز')
  addRow(
    ['نام', 'نام خانوادگی', 'نام پدر', 'هویت', 'کد ملی', 'شماره تماس', 'کلاس'],
    { bold: true }
  )

  addRow([
    student.firstName,
    student.lastName,
    student.fatherName,
     identityTypeOptions.find((o) => o.key === student.identityType)?.value,
    formatValue(student.identityCode),
    formatValue((student as any).parentPhoneNumber),
    student.class?.data?.title ?? ''
  ])

  r++

  /* -------------------- وضعیت مالی -------------------- */
  addMergedHeader('وضعیت مالی')
  addRow(
    [
      'مبلغ بدون تخفیف',
      'تخفیف',
      'مبلغ نهایی',
      '',
      'پرداخت شده',
      'باقیمانده',
      ''
    ],
    { bold: true }
  )

  sheet.mergeCells(`C${r - 1}:D${r - 1}`)
  sheet.mergeCells(`F${r - 1}:G${r - 1}`)

  addRow([
    formatValue(student.debtStatus.totalPaymentAmountWithoutDiscount),
    formatValue(student.debtStatus.totalDiscount),
    formatValue(student.debtStatus.totalPaymentAmount),
    '',
    formatValue(student.debtStatus.totalPayedAmount),
    formatValue(student.debtStatus.totalDebt),
    ''
  ])

  sheet.mergeCells(`C${r - 1}:D${r - 1}`)
  sheet.mergeCells(`F${r - 1}:G${r - 1}`)

  /* -------------------- هزینه‌ها -------------------- */
  addMergedHeader('هزینه‌ها')
  addRow(['عنوان هزینه', '', 'مبلغ', '', '', 'توضیحات', ''], { bold: true })
  sheet.mergeCells(`A${r - 1}:B${r - 1}`)
  sheet.mergeCells(`C${r - 1}:E${r - 1}`)
  sheet.mergeCells(`F${r - 1}:G${r - 1}`)
  ;(student as any).costs?.forEach((cost: any) => {
    addRow([
      cost?.data?.costType?.data?.title ?? '',
      '',
      formatValue(cost?.data?.costType?.data?.baseAmount + cost?.data?.amount),
      '',
      '',
      cost?.data?.description ?? '',
      ''
    ])

    sheet.mergeCells(`A${r - 1}:B${r - 1}`)
    sheet.mergeCells(`C${r - 1}:E${r - 1}`)
    sheet.mergeCells(`F${r - 1}:G${r - 1}`)
  })

  /* -------------------- پرداخت‌ها -------------------- */
  addMergedHeader('پرداخت‌ها')
  addRow(['مبلغ', 'توضیحات', '', '', 'شناسه پرداخت', '', 'تاریخ ثبت'], {
    bold: true
  })

  sheet.mergeCells(`B${r - 1}:D${r - 1}`)
  sheet.mergeCells(`E${r - 1}:F${r - 1}`)
  ;(student as any).payments?.forEach((p: any) => {
    addRow(
      [
        formatValue(p?.data?.amount),
        p?.data?.description ?? '',
        '',
        '',
        formatValue(p?.data?.paymentNumber),
        '',
        new Date(p?.data?.createDate).toLocaleDateString('fa-IR')
      ],
      { height: 30 }
    )

    sheet.mergeCells(`B${r - 1}:D${r - 1}`)
    sheet.mergeCells(`E${r - 1}:F${r - 1}`)
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })

  saveAs(blob, 'student-financial-report.xlsx')
}
