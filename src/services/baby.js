const DOMAIN = 'http://localhost:5000/v1'

const URI_getList = `${DOMAIN}/baby/list`
const URI_baby = `${DOMAIN}/baby`

const Service = {}

Service.getBabyList = async () => {
  const res = await fetch(URI_getList)
  let data = {}
  if (res.ok) {
    data = await res.json()
  }
  return data
}
Service.createBaby = async (firstName, middleName, lastName) => {
  const res = await fetch(URI_baby, {
    method: "POST",
    body: JSON.stringify({
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
  let data = {}
  if (res.ok) {
    data = await res.json()
  }
  return data
}
export default Service