export type Game = Record<string, number>
export type UpdateGame = (key:string, value:number) => void
export type GameInfo = {
    'id': number,
    'name': string
}