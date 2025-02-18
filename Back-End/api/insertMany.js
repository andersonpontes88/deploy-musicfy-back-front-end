import { artistArray } from '../../Front-End/src/assets/database/artists.js'
import { songsArray } from '../../Front-End/src/assets/database/songs.js'
import { db } from './connect.js'


const newArtistsArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = {...currentArtistObj}
  delete newArtistObj.id

  return newArtistObj
})

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = {...currentSongObj}
  delete newSongObj.id

  return newSongObj
})

const responseArtists = db.collection('artists').insertMany(newArtistsArray)
const responseSongs = db.collection('songs').insertMany(newSongsArray)