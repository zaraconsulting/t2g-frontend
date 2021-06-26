export default class Sport
{
    #name;
    #positions;

    constructor (name, positions = [])
    {
        this.#name = name;
        this.#positions = positions;
    }

    populatePositions = (data) =>
    {
        this.#positions.push(data);
    }
    getName = () => this.#name;
    getPositions = () => this.#positions;
    getPlayers = () =>
    {
        for (const p in this.getPositions())
        {
            if (Object.hasOwnProperty.call(this.getPositions(), p))
            {
                const position = this.getPositions()[ p ];
                return position.players;
            }
        }
    };
}