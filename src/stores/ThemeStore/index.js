import {observable,action} from 'mobx'

class ThemeStore{
    @observable selectedTheme='LIGHT'
    
    
    @action.bound
    setCurrentTheme(){
        if(this.selectedTheme==='LIGHT'){
            this.selectedTheme='DARK';
        }
        else{
            this.selectedTheme='LIGHT';
        }
    }
}

const themeStore=new ThemeStore();

export default themeStore;