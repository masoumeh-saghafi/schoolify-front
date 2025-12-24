//Type Definitions
import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'

// Core Components
import type BasePaginationDataEntity from '@schoolify/core/types/core/api/response'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Custom Hooks
import type ListStudentReportEntity from '@schoolify/features/user/school/report/students/full/types/api/ListStudentReportEntity'


interface ExportListStudentReportParams {
  data?: BasePaginationDataEntity<
    BaseIdDataEntity<ListStudentReportEntity>
  > | null
}

const toPersianDigits = (str: string) =>
  str.replace(/\d/g, d => String.fromCharCode(d.charCodeAt(0) + 1728))

const formatNumber = (val?: number) =>
  val != null ? toPersianDigits(val.toLocaleString('fa-IR')) : ''

export const exportListStudentReportToExcel = async ({
  data
}: ExportListStudentReportParams) => {
  if (!data?.docs?.length) {
    alert('هیچ داده‌ای برای خروجی گرفتن وجود ندارد.')
    return
  }

  const workbook = new ExcelJS.Workbook()
  const sheet = workbook.addWorksheet('گزارش دانش‌آموزان')

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
    { width: 12.09 },
    { width: 13.09 },
    { width: 11.12 }
  ]

  let rowIndex = 1

  const addMergedHeader = (title: string) => {
    sheet.mergeCells(`A${rowIndex}:F${rowIndex}`)
    const cell = sheet.getCell(`A${rowIndex}`)
    cell.value = title
    sheet.getRow(rowIndex).height = 30
    Object.assign(cell, commonStyle)
    cell.font = { ...cell.font, bold: true, size: 12 }
    rowIndex++
  }

  const addRow = (values: any[], bold = false) => {
    const row = sheet.addRow(values)
    row.height = 30
    row.eachCell(cell => {
      Object.assign(cell, commonStyle)
      if (bold) cell.font = { ...cell.font, bold: true }
    })
    rowIndex++
  }


  addMergedHeader('گزارش مالی دانش‌آموزان')

  
  addRow(
    [
      'نام',
      'نام خانوادگی',
      'نام پدر',
      'مبلغ کل',
      'مبلغ پرداخت شده',
      'مبلغ باقیمانده'
    ],
    true
  )


  data.docs.forEach(item => {
    const student = item.data
    addRow([
      student?.firstName,
      student?.lastName,
      student?.fatherName,
      formatNumber(student?.debtStatus?.totalPaymentAmount),
      formatNumber(student?.debtStatus?.totalPayedAmount),
      formatNumber(student?.debtStatus?.totalDebt)
    ])
  })

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })

  saveAs(blob, 'student-report.xlsx')
}
