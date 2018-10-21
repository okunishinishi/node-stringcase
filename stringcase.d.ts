declare namespace e {
    export type Conventions =
        | 'camelcase'
        | 'capitalcase'
        | 'constcase'
        | 'cramcase'
        | 'decapitalcase'
        | 'dotcase'
        | 'enumcase'
        | 'lowercase'
        | 'pascalcase'
        | 'pathcase'
        | 'sentencecase'
        | 'snakecase'
        | 'spinalcase'
        | 'titlecase'
        | 'trimcase'
        | 'uppercase'
}
type Transform = (input: string) => string
interface Indexer {
    [x: string]: Transform
}
declare const e: Readonly<Record<e.Conventions, Transform>> & Indexer
export = e