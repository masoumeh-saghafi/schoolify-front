import ExcelJS from 'exceljs'
import { saveAs } from 'file-saver'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type BasePaginationDataEntity from '@schoolify/core/types/core/api/response'
import type ListSummaryStudentReportEntity from '../types/api/ListSummaryStudentReportEntity'

interface ExportStudentListParams {
  data?: BasePaginationDataEntity<
    BaseIdDataEntity<ListSummaryStudentReportEntity>
  > | null
}

export const ExportStudentListSummaryToExcel = async ({
  data
}: ExportStudentListParams) => {
  if (!data?.docs?.length) {
    alert('هیچ داده‌ای برای خروجی گرفتن وجود ندارد.')
    return
  }

  const workbook = new ExcelJS.Workbook()

  /* -------------------- helpers -------------------- */

  const toPersianDigits = (str: string) =>
    str.replace(/\d/g, d => String.fromCharCode(d.charCodeAt(0) + 1728))

  const formatNumber = (val?: number) =>
    val != null ? toPersianDigits(val.toLocaleString('fa-IR')) : ''

  const commonStyle = {
    alignment: { vertical: 'middle', horizontal: 'center', wrapText: true },
    font: { name: 'Tahoma', size: 8 },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
      left: { style: 'thin' },
      right: { style: 'thin' }
    }
  }

  const createSheet = (sheetNumber: number) => {
    const sheet = workbook.addWorksheet(`صفحه - ${sheetNumber}`)

    return sheet
  }
  // تنظیمات فونت و استایل مشترک
  // sheet.properties.defaultRowHeight = 30;
  // const commonStyle = {
  //   alignment: { vertical: "middle", horizontal: "center", wrapText: true },
  //   font: { name: "Tahoma", size: 8 },
  //   border: {
  //     top: { style: "thin" },
  //     bottom: { style: "thin" },
  //     left: { style: "thin" },
  //     right: { style: "thin" },
  //   },
  // };

  const addDefaultSheetStyles = (sheet: ExcelJS.Worksheet) => {
    // اندازه ستون‌ها طبق قالب قبلی
    sheet.columns = [
      { width: 12.12 }, // نام
      { width: 13.37 }, // نام خانوادگی
      { width: 9.87 }, // نام پدر
      { width: 11.12 }, // کلاس
      { width: 4.5 }, // -
      { width: 11.12 }, // نام
      { width: 12.09 }, // نام خانوادگی
      { width: 13.09 }, // نام پدر
      { width: 11.12 } // کلاس
    ]

    const borderedCells = [
      'A8',
      'B8',
      'C8',
      'D8',
      'F8',
      'G8',
      'H8',
      'I8',
      'A9',
      'B9',
      'C9',
      'D9',
      'F9',
      'G9',
      'H9',
      'I9',
      'A10',
      'B10',
      'C10',
      'D10',
      'F10',
      'G10',
      'H10',
      'I10',
      'A11',
      'B11',
      'C11',
      'D11',
      'F11',
      'G11',
      'H11',
      'I11',

      'A23',
      'B23',
      'C23',
      'D23',
      'F23',
      'G23',
      'H23',
      'I23',
      'A24',
      'B24',
      'C24',
      'D24',
      'F24',
      'G24',
      'H24',
      'I24',
      'A25',
      'B25',
      'C25',
      'D25',
      'F25',
      'G25',
      'H25',
      'I25',
      'A26',
      'B26',
      'C26',
      'D26',
      'F26',
      'G26',
      'H26',
      'I26'
    ]
    borderedCells.map(cellName => {
      const cell = sheet.getCell(cellName)
      Object.assign(cell, commonStyle)
    })

    const mergedCells = [
      'C8:D8',
      'H8:I8',
      'C9:D9',
      'H9:I9',
      'C10:D10',
      'H10:I10',
      'C11:D11',
      'H11:I11',

      'C23:D23',
      'H23:I23',
      'C24:D24',
      'H24:I24',
      'C25:D25',
      'H25:I25',
      'C26:D26',
      'H26:I26'
    ]
    mergedCells.map(cellRange => {
      sheet.mergeCells(cellRange)
    })

    const borderRightCells = [
      'D3',
      'D6',
      'D18',
      'D21',
      'I3',
      'I6',
      'I18',
      'I21'
    ]
    borderRightCells.map(cellName => {
      const cell = sheet.getCell(cellName)
      cell.border = {
        ...cell?.border,
        right: { ...cell?.border?.right, style: 'thin' }
      }
    })

    const borderLeftCells = ['A3', 'A6', 'A18', 'A21', 'F3', 'F6', 'F18', 'F21']
    borderLeftCells.map(cellName => {
      const cell = sheet.getCell(cellName)
      cell.border = {
        ...cell?.border,
        left: { ...cell?.border?.left, style: 'thin' }
      }
    })

    const colE = sheet.getColumn('E')
    colE.border = { ...colE.border, bottom: undefined, top: undefined }
  }

  const addRow = (
    sheet: ExcelJS.Worksheet,
    values: any[],
    options: any = {},
    rowNumber: number | undefined = undefined
  ) => {
    let row
    if (rowNumber !== undefined) {
      // Insert a new row at the specified position
      sheet.spliceRows(rowNumber, 0, values)
      // Retrieve the newly inserted row
      row = sheet.getRow(rowNumber)
    } else {
      // Append row to the end of the sheet
      row = sheet.addRow(values)
    }

    // Apply common styling and options
    row.height = options.height ?? 30
    row.eachCell(cell => {
      Object.assign(cell, commonStyle)
      if (options.bold) cell.font = { ...cell.font, bold: true }
    })
  }
  const addCell = (
    sheet: ExcelJS.Worksheet,
    row: number,
    col: number,
    value: any,
    options: any = {}
  ) => {
    const cell = sheet.getCell(row, col)
    cell.value = value

    Object.assign(cell, commonStyle)
    if (options.fontSize) cell.font = { ...cell.font, size: options.fontSize }
    // در تابع addCell
  }

  const addHeaders = (sheet: ExcelJS.Worksheet, r: number) => {
    addRow(
      sheet,
      [
        'نام',
        'نام خانوادگی',
        'نام پدر',
        'کلاس',

        '',

        'نام',
        'نام خانوادگی',
        'نام پدر',
        'کلاس'
      ],
      { bold: true },
      r
    )

    r += 3

    addRow(
      sheet,
      [
        'شهریه کل',
        'تخفیف',
        '',
        'جمع کل',

        '',

        'شهریه کل',
        'تخفیف',
        '',
        'جمع کل'
      ],
      { bold: true },
      r
    )

    sheet.mergeCells(`B${r}:C${r}`)
    sheet.mergeCells(`G${r}:H${r}`)

    r += 3

    addRow(
      sheet,
      [
        'تاریخ پرداخت',
        'مبلغ',
        'شماره کارت',
        '',

        '',

        'تاریخ پرداخت',
        'مبلغ',
        'شماره کارت',
        ''
      ],
      { bold: true },
      r
    )

    sheet.mergeCells(`C${r}:D${r}`)
    sheet.mergeCells(`H${r}:I${r}`)

    r += 5

    addRow(
      sheet,
      [
        'جمع پرداخت شده',
        'باقیمانده حساب',
        'در صورت مغایرت به دفتر آموزشگاه مراجعه کنید',
        '',

        '',

        'جمع پرداخت شده',
        'باقیمانده حساب',
        'در صورت مغایرت به دفتر آموزشگاه مراجعه کنید',
        ''
      ],
      { bold: true },
      r
    )
    sheet.mergeCells(`C${r}:D${r + 1}`)
    sheet.mergeCells(`H${r}:I${r + 1}`)
  }

  // const toPersianDigits = (str: string) =>
  //   str.replace(/\d/g, (d) => String.fromCharCode(d.charCodeAt(0) + 1728));

  // const formatNumber = (val: number) =>
  //   val != null ? toPersianDigits(val.toLocaleString("fa-IR")) : "";

  let sheet: ExcelJS.Worksheet
  data.docs.map((student, i) => {
    // The indexes can be
    // 0,1,2,3 - 4,5,6,7 - 8,9,10,11 - ...

    if (i % 4 == 0) {
      sheet = createSheet(i / 4 + 1)
      addHeaders(sheet, 1)
      addHeaders(sheet, 16)
      addDefaultSheetStyles(sheet)
    }

    if (i / 4 >= 1) {
      i = i - Math.floor(i / 4) * 4 // 0-3
    }

    const startRow = i == 0 || i == 1 ? 2 : i == 2 || i == 3 ? 17 : -1
    const startColumn = i == 0 || i == 2 ? 1 : i == 1 || i == 3 ? 6 : -1

    let row = startRow
    let col = startColumn

    // نام و مشخصات هویتی
    addCell(sheet, row, col, student.data?.firstName)
    col++

    addCell(sheet, row, col, student.data?.lastName)
    col++

    addCell(sheet, row, col, student.data?.fatherName)
    col++

    addCell(sheet, row, col, student.data?.class.data?.title)
    col++

    // مشخصات شهریه
    col = startColumn
    row += 3

    addCell(
      sheet,
      row,
      col,
      formatNumber(student.data?.debtStatus.totalPaymentAmountWithoutDiscount)
    )
    col++

    addCell(
      sheet,
      row,
      col,
      formatNumber(student.data?.debtStatus.totalDiscount)
    )
    sheet.mergeCells(row, col, row, col + 1)
    col += 2

    addCell(
      sheet,
      row,
      col,
      formatNumber(student.data?.debtStatus.totalPaymentAmount)
    )
    col++

    // سابقه پرداخت
    row += 3
    const payments = student.data?.payments ?? []

    let internalRow = row
    for (let index = 0; index < payments.length; index++) {
      if (index > 3) break
      const payment = student.data?.payments[index]

      col = startColumn

      addCell(sheet, internalRow, col, payment?.data?.paymentDate)
      col++

      addCell(sheet, internalRow, col, formatNumber(payment?.data?.amount))
      col++

      addCell(sheet, internalRow, col, payment?.data?.paymentNumber)
      // sheet.mergeCells(internalRow, col, internalRow, col + 1);
      col++

      internalRow++
    }

    // وضعیت بدهی
    row += 5
    col = startColumn

    addCell(
      sheet,
      row,
      col,
      formatNumber(student.data?.debtStatus.totalPayedAmount)
    )
    col++

    addCell(sheet, row, col, formatNumber(student.data?.debtStatus.totalDebt))
    col++
  })

  // ذخیره فایل
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  saveAs(blob, 'student-report.xlsx')
}
