export default class UsersKezikService {
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

			return method === 'GET' ? await res.json() : 1
		} catch (e) {
			throw new Error(`Error code: ${e}`)
		}
	}

	static getUsers = () => {
		return this.resourcesReq(`${this._baseUrl}/user/getAll`)
	}

	static deleteUser = (id) => {
		return this.resourcesReq(`${this._baseUrl}/user/delete/${id}`, 'DELETE')
	}
	
	static userRoleHandler = (id, motion) => {
		return this.resourcesReq(`${this._baseUrl}/user/role/handler/${id}/${motion}`, 'PUT')
	}

	static userActivate = (id, officeId) => {
		return this.resourcesReq(`${this._baseUrl}/user/activate/${id}/${officeId}`, 'PUT')
	}
}