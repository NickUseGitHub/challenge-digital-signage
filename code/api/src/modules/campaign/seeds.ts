import { ImageAds, VideoAds } from '@app/types/ads'

import { CampaignAds } from './types'
import { getTimestamp, getDate, getTimeRange } from '../../utils/dates'

const firstCampaignAds: CampaignAds = {
  id: 1,
  name: 'Campaign 1',
  kiosTags: ['K01', 'K03'],
  adsList: [
    {
      id: '1',
      name: 'Pic 1',
      srcUrl:
        'https://images.unsplash.com/photo-1596535293503-77f7cbb1f7e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      type: 'image',
      duration: 2,
    } as ImageAds,
    {
      id: '2',
      name: 'Gif 2',
      srcUrl: 'https://media.giphy.com/media/3owzVWvzsQmilVYbpS/giphy.gif',
      type: 'image',
      duration: 3,
    } as ImageAds,
    {
      id: '3',
      name: 'Pic 3',
      srcUrl:
        'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1298&q=80',
      type: 'image',
      duration: 2,
    } as ImageAds,
    {
      id: '4',
      name: 'Vdo 4',
      srcUrl: 'https://www.youtube.com/embed/aUd8JjFQ7hg',
      type: 'vdo',
      duration: 3,
    } as VideoAds,
  ],
  dateRanges: [
    {
      startTime: getTimestamp(
        getDate({
          date: 8,
          month: 8,
          year: '2020',
        }),
      ),
      endTime: getTimestamp(
        getDate({
          date: 14,
          month: 8,
          year: '2020',
        }),
      ),
    },
  ],
  timeRanges: [
    getTimeRange('00:17:15', '07:00'),
    getTimeRange('08:00', '14:00'),
    getTimeRange('17:00', '23:59'),
  ],
}

const secondCampaignAds: CampaignAds = {
  id: 2,
  name: 'Campaign 2',
  kiosTags: ['K02'],
  adsList: [
    {
      id: '5',
      name: 'Pic 5',
      srcUrl:
        'https://images.unsplash.com/photo-1596892668836-f537dcc3c58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80',
      type: 'image',
      duration: 5,
    } as ImageAds,
    {
      id: '6',
      name: 'Video 6',
      srcUrl: 'https://www.youtube.com/embed/RwogxXxF6_k',
      type: 'vdo',
      duration: 5,
    } as VideoAds,
    {
      id: '7',
      name: 'Pic 7',
      srcUrl:
        'https://images.unsplash.com/photo-1596650990361-213a3c0840ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
      type: 'image',
      duration: 5,
    } as ImageAds,
  ],
  dateRanges: [
    {
      startTime: getTimestamp(
        getDate({
          date: 13,
          month: 8,
          year: '2020',
        }),
      ),
      endTime: getTimestamp(
        getDate({
          date: 14,
          month: 8,
          year: '2020',
        }),
      ),
    },
  ],
  timeRanges: [getTimeRange('12:00', '15:00')],
}

const thirdCampaignAds: CampaignAds = {
  id: 3,
  name: 'Campaign 3',
  kiosTags: ['K03'],
  adsList: [
    {
      id: '8',
      name: 'Video 8',
      srcUrl: 'https://www.youtube.com/embed/yOvT0VvbTPE',
      type: 'vdo',
      duration: 3,
    } as VideoAds,
    {
      id: '9',
      name: 'Gif 9',
      srcUrl: 'https://media.giphy.com/media/xTiIzqBRXO9nPi4i7C/giphy.gif',
      type: 'image',
      duration: 3,
    } as ImageAds,
  ],
  dateRanges: [
    {
      startTime: getTimestamp(
        getDate({
          date: 8,
          month: 8,
          year: '2020',
        }),
      ),
      endTime: getTimestamp(
        getDate({
          date: 19,
          month: 8,
          year: '2020',
        }),
      ),
    },
  ],
  timeRanges: [
    getTimeRange('00:00', '02:00'),
    getTimeRange('10:00', '15:00'),
    getTimeRange('18:00', '23:59'),
  ],
}

export const campaignAdsList: CampaignAds[] = [
  firstCampaignAds,
  secondCampaignAds,
  thirdCampaignAds,
]
