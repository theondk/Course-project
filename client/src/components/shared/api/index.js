export default class KezikServices {
    static _baseUrl = "http://localhost:8080"

    static getResources = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const res = await fetch(url, {
                method,
                headers,
                body
            })
            return method === 'GET' ? await res.json() : 1
        } catch(e) {
            throw new Error(`Error code: ${e}`)
        }
    }

    static getSomeTerritories = (offset = 0, limit = 0) => {
        return this.getResources(`${this._baseUrl}/territory/getAll?offset=${offset}&limit=${limit}`)
    }

    static getTerritoriesCount = () => {
        return this.getResources(`${this._baseUrl}/territory/getCount`)
    }

    static getTerritory = (id) => {
        return this.getResources(`${this._baseUrl}/territory/getAll/${id}`)
    }

    static addTerritory = (body) => {
        return this.getResources(`${this._baseUrl}/territory/add`, 'POST', JSON.stringify(body))
    }

    static deleteTerritory = (id) => {
        return this.getResources(`${this._baseUrl}/territory/deleteOne/${id}`, 'DELETE')
    }
}