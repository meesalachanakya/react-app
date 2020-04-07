import React from 'react'
import tw from 'tailwind.macro'

const Search=tw.input`
  border-solid border-2 border-gray-600 hover:border-blue-600 w-56 text-xl p-1  
`

class SearchCountry extends React.Component{
    state={
        searchText:''
    }
    
    onChangeSearchText=(event)=>{
        this.setState({searchText:event.target.value})
        this.props.searchName(event.target.value)
        
    }
    render(){
        return(
                <Search className={this.props.theme} onChange={this.onChangeSearchText} placeholder="search country..."></Search>
            )
    }
}
export default SearchCountry;