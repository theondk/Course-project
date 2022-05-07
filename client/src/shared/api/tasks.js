export default class TasksKezikService {
	static _baseUrl = 'http://localhost:8080'

	static resourcesReq = async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {
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

	static getTasks = () => {
		return this.resourcesReq(`${this._baseUrl}/task/getAll`)
	}

	static deleteTask = (id) => {
		return this.resourcesReq(`${this._baseUrl}/task/deleteOne/${id}`, 'DELETE')
	}

	static addTask = (body, userId) => {
		return this.resourcesReq(`${this._baseUrl}/task/add/${userId}`, 'POST', JSON.stringify(body))
	}

	static getUserTasks = (id) => {
		return this.resourcesReq(`${this._baseUrl}/task//getByUserId/${id}`)
	}
}