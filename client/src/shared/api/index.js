export default class KezikServices {
	static _baseUrl = 'http://localhost:8080'

	static resourcesReq = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
		try {
			const res = await fetch(url, {
				method,
				headers,
				body
			})

			return await method === 'GET' ? res.json() : 1
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

	static getOffices = (offset = 0, limit = 0) => {
		return this.resourcesReq(`${this._baseUrl}/office/getAll?offset=${offset}&limit=${limit}`)
	}

	static getFilterOffices = () => {
		return this.resourcesReq(`${this._baseUrl}/office/getByFilter`)
	}

	static getOfficesCount = () => {
		return this.resourcesReq(`${this._baseUrl}/office/getCount`)
	}

	static getOffice = (id) => {
		return this.resourcesReq(`${this._baseUrl}/office/getAll/${id}`)
	}

	static addOffice = (body, id) => {
		return this.resourcesReq(`${this._baseUrl}/office/add/${id}`, 'POST', JSON.stringify(body))
	}

	static deleteOffice = (id) => {
		return this.resourcesReq(`${this._baseUrl}/office/deleteOne/${id}`, 'DELETE')
	}

	static updateOffice = (id, body, countryId) => {
		return this.resourcesReq(`${this._baseUrl}/office/edit/${id}/${countryId}`, 'PUT', JSON.stringify(body))
	}

	static login = (body) => {
		return this.authReq(`${this._baseUrl}/user/authUser`, 'POST', JSON.stringify(body))
	}

	static register = (body) => {
		return this.authReq(`${this._baseUrl}/user/add`, 'POST', JSON.stringify(body))
	}

	static recoverPassword = (body) => {
		return this.authReq(`${this._baseUrl}/user/recover`, 'PUT', JSON.stringify(body))
	}
}