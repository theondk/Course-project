export default class HistoryKezikService {
	static _baseUrl = 'http://localhost:8080'

	static resourcesReq = async (url, method = 'GET', body = null, headers = {
		'Content-Type': 'application/json'
	}) => {
		try {
			const res = await fetch(url, {
				method,
				headers,
				body
			})

			return await method === 'GET' ? res.json() : 1
		} catch (e) {
			throw new Error(`Error code: ${e}`)
		}
	}

	static getHistory = () => {
		return this.resourcesReq(`${this._baseUrl}/history/getAll`)
	}

	static addInHistory = (body) => {
		return this.resourcesReq(`${this._baseUrl}/history/add`, 'POST', JSON.stringify(body))
	}

	static deleteFromHistory = (id) => {
		return this.resourcesReq(`${this._baseUrl}/history/deleteOne/${id}`, 'DELETE')
	}
}