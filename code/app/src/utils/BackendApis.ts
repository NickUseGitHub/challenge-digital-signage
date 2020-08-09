import axios from 'axios'

const backendApis = axios.create({
  baseURL: 'http://localhost:3001/apis',
  timeout: 1000,
})

export default class BackendApis {
  static getShowingCampaignAds(kiosTag: string) {
    return backendApis
      .get(`/campaigns/${kiosTag}`)
      .then((response) => response.data)
  }
}
