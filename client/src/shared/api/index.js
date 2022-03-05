export default class KezikServices {
	static _baseUrl = 'http://localhost:8080'

	static resourcesReq = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
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

	static authReq = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
		try {
			const res = await fetch(url, {
				method,
				headers,
				body
			})

			return await res.json()
		} catch(e) {
			throw new Error(`Error code: ${e}`)
		}
	}

	static getSomeTerritories = (offset = 0, limit = 0) => {
		return this.resourcesReq(`${this._baseUrl}/territory/getAll?offset=${offset}&limit=${limit}`)
	}

	static getTerritoriesCount = () => {
		return this.resourcesReq(`${this._baseUrl}/territory/getCount`)
	}

	static getTerritory = (id) => {
		return this.resourcesReq(`${this._baseUrl}/territory/getAll/${id}`)
	}

	static addTerritory = (body) => {
		return this.resourcesReq(`${this._baseUrl}/territory/add`, 'POST', JSON.stringify(body))
	}

	static deleteTerritory = (id) => {
		return this.resourcesReq(`${this._baseUrl}/territory/deleteOne/${id}`, 'DELETE')
	}

	static updateTerritory = (id, body) => {
		return this.resourcesReq(`${this._baseUrl}/territory/edit/${id}`, 'PUT', JSON.stringify(body))
	}

	static login = (body) => {
		return this.authReq(`${this._baseUrl}/user/authUser`, 'POST', JSON.stringify(body))
	}

	static register = (body) => {
		return this.authReq(`${this._baseUrl}/user/add`, 'POST', JSON.stringify(body))
	}
}