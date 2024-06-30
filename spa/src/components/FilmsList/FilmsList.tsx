import FilmCard, { IFilm } from "components/FilmCard/FilmCard"
import { useGetMoviesQuery } from "store/apiSlice/apiSlice"

function FilmsList() {
	const {data} = useGetMoviesQuery({})
	const elements  = data?.search_result?.map((el: IFilm) => <FilmCard key={el.id} film={el}/>)
  return (
	<div style={{display: 'flex', gap: '16px', flexDirection: 'column'}}>
	  {elements}
	</div>
  )
}

export default FilmsList
