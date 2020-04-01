import React from 'react'

class SearchCountry extends React.Component{
    state={
        searchText:''
    }
    
    onChangeSearchText=(event)=>{
        this.setState({searchText:event.target.value})
        this.props.searchName(event.target.value)
        //this.onSubmitSearchText(event.target.value)
        
    }
    /*
    onSubmitSearchText=(text)=>{
        this.props.search(text)
    }
    */
    render(){
        return(
            <div><input type="text" className={`search ${this.props.theme}`} onChange={this.onChangeSearchText} placeholder="search country..."  /></div>
            )
    }
}
export default SearchCountry;