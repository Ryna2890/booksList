import {BookCardProps} from "../../components/BookCard/BookCard";

interface IIndustryIdentifiers {
    type: string
    identifier: string
}

interface IImageLinks {
    smallThumbnail: string
    thumbnail: string
}

interface IPanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

interface IReadingModes {
    image: boolean
    text: boolean
}

interface IVolumeInfo {
    allowAnonLogging: boolean
    authors: string[]
    canonicalVolumeLink: string
    contentVersion: string
    description?: string
    imageLinks?: IImageLinks
    industryIdentifiers: IIndustryIdentifiers[]
    infoLink: string
    language: string
    maturityRating: string
    pageCount: number
    panelizationSummary: IPanelizationSummary
    previewLink: string
    printType: string
    publishedDate: string
    readingModes: IReadingModes
    title: string
    subtitle: string
    categories?: string[]
}

interface IListPrice {
    amount: number
    currencyCode: string
}

interface ISaleInfo {
    buyLink: string
    country: string
    isEbook: boolean
    saleability: string
    listPrice: IListPrice
    offers: IOffers[]
    retailPrice: IListPrice
}

interface IFormat {
    isAvailable: boolean
    downloadLink: string
    acsTokenLink: string
}

interface IAccessInfo {
    accessViewStatus: string
    country: string
    embeddable: boolean
    epub: IFormat
    pdf: IFormat
    publicDomain: boolean
    quoteSharingAllowed: boolean
    textToSpeechPermission: string
    viewability: string
    webReaderLink: string
}

interface ISearchInfo {
    textSnippet: string
}

interface IOffers {
    finskyOfferType: number
    listPrice: IListPrice
    retailPrice: IListPrice
}

export interface IBooksItems {
    accessInfo: IAccessInfo
    etag: string
    id: string
    kind: string
    saleInfo: ISaleInfo
    searchInfo: ISearchInfo
    selfLink: string
    volumeInfo: IVolumeInfo
}

export interface IBooksModels {
    items: IBooksItems[]
    kind: string
    totalItems: number
}

export interface IQuery {
    category: string;
    search?: string;
    orderBy: string;
    startIndex: number;
}

export interface IbooksSliceState {
    category: string;
    search?: string;
    orderBy: string;
    startIndex: number;
    skip: boolean;
    books: BookCardProps[] | [];
    totalItems: number;
}
