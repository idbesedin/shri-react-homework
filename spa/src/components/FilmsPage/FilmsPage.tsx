import { FilmsList, FiltersBar } from ".."

function FilmsPage() {

  return (
	<div style={{display: 'flex', gap: '24px'}}>
	  <FiltersBar/>
	  <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}> 
			<p>Поиск</p>
			<FilmsList/>
	  </div>
	</div>
  )
}

export default FilmsPage
