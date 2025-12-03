import React from 'react'
import DevBadge from './dev-badge'

// Theme colors matching the design
const THEME_COLORS = {
    early: {
        header: 'bg-[#c56a53]',
        cell: 'bg-[#df9682]',
    },
    primary: {
        header: 'bg-[#42664f]',
        cell: 'bg-[#87b29b]',
    },
    secondary: {
        header: 'bg-[#b8823e]',
        cell: 'bg-[#efc06e]',
    },
}

interface StatusConfig {
    text?: string[]
    rowSpan?: number
    textColor?: string
    isEmpty?: boolean
}

interface CurriculumRow {
    id: string
    age: string
    grade: string
    nest: string
    status?: StatusConfig
}

interface CurriculumPhase {
    id: string
    title: string
    themeColor: {
        header: string
        cell: string
    }
    rows: CurriculumRow[]
}

const CURRICULUM_DATA: CurriculumPhase[] = [
    {
        id: 'early-years',
        title: 'Early Years',
        themeColor: THEME_COLORS.early,
        rows: [
            {
                id: 'ey-1',
                age: '2 - 4',
                grade: 'K2 - K3',
                nest: 'Penguins',
                status: {
                    text: ['Open'],
                    rowSpan: 5,
                    textColor: 'text-[#1a4a35]',
                },
            },
            {
                id: 'ey-2',
                age: '4 - 6',
                grade: 'K4 - K5',
                nest: 'Jays',
            },
        ],
    },
    {
        id: 'primary-school',
        title: 'Primary School',
        themeColor: THEME_COLORS.primary,
        rows: [
            {
                id: 'ps-1',
                age: '6 - 8',
                grade: 'Grades 1 - 2',
                nest: 'Owls',
            },
            {
                id: 'ps-2',
                age: '8 - 10',
                grade: 'Grades 3 - 4',
                nest: 'Robins',
            },
            {
                id: 'ps-3',
                age: '10 - 12',
                grade: 'Grades 5 - 6',
                nest: 'Falcons',
            },
        ],
    },
    {
        id: 'secondary-school',
        title: 'Secondary School',
        themeColor: THEME_COLORS.secondary,
        rows: [
            {
                id: 'ss-1',
                age: '12 - 14',
                grade: 'Grades 7 - 8',
                nest: 'Bosque',
                status: {
                    isEmpty: true,
                    rowSpan: 1,
                },
            },
            {
                id: 'ss-2',
                age: '14 - 16',
                grade: 'Grades 9 - 10',
                nest: 'Río',
                status: {
                    text: ['Grade 9 opening in Feb 2026', 'Grade 10 opening in Feb 2027'],
                    rowSpan: 1,
                    textColor: 'text-[#b8823e]',
                },
            },
            {
                id: 'ss-3',
                age: '16 - 18',
                grade: 'Grades 11 - 12',
                nest: 'Sierra',
                status: {
                    text: ['Grade 11 opening in Feb 2028', 'Grade 12 opening in Feb 2029'],
                    rowSpan: 1,
                    textColor: 'text-[#b8823e]',
                },
            },
        ],
    },
]

const TABLE_HEADERS = ['Educational Phase', 'Age Ranges', 'Grade Equivalent', 'TGS Nest', 'Status']

function CurriculumTable() {
    return (
        <div className="w-full overflow-x-auto pb-4">
            <table className="min-w-[700px] w-full border-separate border-spacing-1">
                <thead>
                    <tr>
                        {TABLE_HEADERS.map((header, index) => (
                            <th
                                key={index}
                                className={`
                                    pb-4 pt-2 px-3 text-center font-medium text-[#ba8043] text-sm tracking-wide
                                    ${index === 0 ? 'w-1/5' : ''}
                                    ${index === 4 ? 'w-1/6' : ''}
                                `}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {CURRICULUM_DATA.map((phase: CurriculumPhase) => (
                        <React.Fragment key={phase.id}>
                            {phase.rows.map((row: CurriculumRow, rowIndex: number) => {
                                const isFirstRowOfPhase = rowIndex === 0

                                return (
                                    <tr key={row.id} className="h-14">
                                        {isFirstRowOfPhase && (
                                            <td
                                                rowSpan={phase.rows.length}
                                                className={`${phase.themeColor.header} text-white font-medium text-sm text-center align-middle  px-4`}
                                            >
                                                {phase.title}
                                            </td>
                                        )}

                                        <td
                                            className={`${phase.themeColor.cell} text-white font-medium text-sm text-center align-middle  py-4`}
                                        >
                                            {row.age}
                                        </td>
                                        <td
                                            className={`${phase.themeColor.cell} text-white font-medium text-sm text-center align-middle  py-4`}
                                        >
                                            {row.grade}
                                        </td>
                                        <td
                                            className={`${phase.themeColor.cell} text-white font-medium text-sm text-center align-middle  py-4`}
                                        >
                                            {row.nest}
                                        </td>

                                        {row.status && (
                                            <td
                                                rowSpan={row.status.rowSpan || 1}
                                                className="bg-white text-center align-middle  px-3"
                                            >
                                                {!row.status.isEmpty && row.status.text && (
                                                    <div
                                                        className={`flex flex-col justify-center gap-0.5 ${row.status.textColor || 'text-gray-800'} font-medium`}
                                                    >
                                                        {row.status.text.map((line, i) => (
                                                            <span
                                                                key={i}
                                                                className={
                                                                    line === 'Open'
                                                                        ? 'text-xl font-medium'
                                                                        : 'text-xs font-semibold'
                                                                }
                                                            >
                                                                {line}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </td>
                                        )}
                                    </tr>
                                )
                            })}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default function EnrolmentRoadmap() {
    return (
        <section className="relative bg-white py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                    {/* Left: Text (1/3) */}
                    <div>
                        <h2 className="text-4xl leading-snug font-medium text-[#C65D3B] !text-[#D39885]">
                            As we grow organically, check out our Enrolment Roadmap.
                        </h2>
                    </div>

                    {/* Right: Table (2/3) */}
                    <div className="md:col-span-2">
                        <CurriculumTable />
                    </div>
                </div>
            </div>
            <DevBadge name="enrolment-roadmap" />
        </section>
    )
}
