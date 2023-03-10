import React from 'react'
import AnimeList from '../components/AnimeList'
import SectionTitle from '../components/SectionTitle'

export default function NewRelease({ data }) {
  return (
    <section className='container my-20'>
      <SectionTitle title={'ANIME new release'} href={'/'} isVisible />

      <AnimeList data={data} />
    </section>
  )
}
