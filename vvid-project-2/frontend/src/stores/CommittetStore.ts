interface CommitteeMember {
    name: string;
    affiliation: string;
}

export interface CommitteeData {
    "So-predstaviteli": CommitteeMember[];
    "ComitetMembers": CommitteeMember[];
}

export const committeeData: CommitteeData = {
    "So-predstaviteli": [
        {
            name: "Власюк В.В.",
            affiliation: "Специальная астрофизическая обсерватория РАН",
        },
        {
            name: "Шевченко И.К.",
            affiliation: "Южный федеральный университет",
        },
        {
            name: "Шелудько В.Н.",
            affiliation: "Санкт-Петербургский государственный электротехнический университет «ЛЭТИ» им. В.И. Ульянова (Ленина)",
        },
    ],
    "ComitetMembers": [
        {
            name: "Веселов Г.Е.",
            affiliation: "Южный федеральный университет",
        },
        {
            name: "Доргушаова А.К.",
            affiliation: "Майкопский государственный технологический университет",
        },
        {
            name: "Заковоротный В.Л.",
            affiliation: "Донской государственный технический университет",
        },
        {
            name: "Кайсина Е.И.",
            affiliation: "Специальная астрофизическая обсерватория РАН",
        },
        {
            name: "Котов Д.В.",
            affiliation: "Военная академия Генерального Штаба ВС РФ",
        },
        {
            name: "Ляпунцова Е.В.",
            affiliation: "Московский государственный технический университет имени Н.Э. Баумана",
        },
        {
            name: "Першин И.М.",
            affiliation: "Северо-Кавказский федеральный университет",
        },
        {
            name: "Петренко В.И.",
            affiliation: "Северо-Кавказский федеральный университет",
        },
        {
            name: "Раппопорт Э.Я.",
            affiliation: "Самарский государственный технический университет",
        },
    ],
};