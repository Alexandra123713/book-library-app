import { useDispatch, useSelector } from "react-redux"
import { setTitleFilter, setAuthorFilter, setOnlyFavoriteFilters, selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilters, resetFilters,   } from "../../redux/slices/filterSlice"
import "./Filter.css"

export const Filter = ()=>{
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilters)


    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }
    const handleResetFilters = () =>{
        dispatch(resetFilters())
    }
    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }
    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilters())
    }



    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input 
                    type="text"
                    value={titleFilter}
                    placeholder="filter by title..." 
                    onChange={handleTitleFilterChange} 
                    />
                </div>
                <div className="filter-group">
                    <input 
                    type="text"
                    value={authorFilter}
                    placeholder="filter by author..." 
                    onChange={handleAuthorFilterChange} 
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input type="checkbox" checked = {onlyFavoriteFilter} onChange={handleOnlyFavoriteFilterChange}/>
                        Only favorite
                    </label>
                </div>
                <button  type="button" onClick={handleResetFilters}>Reset filters</button>
            </div>
        </div>
    )
}