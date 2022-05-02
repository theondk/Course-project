export default class CountryKezikService {
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

	static getCountries = () => {
		return this.resourcesReq(`${this._baseUrl}/country/getAll`)
	}

	static addCountry = (body) => {
		return this.resourcesReq(`${this._baseUrl}/country/add`, 'POST', JSON.stringify(body))
	}
}