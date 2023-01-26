import React from  'react';

class Form extends React.Component {
    constructor() {
        super();
    
        this.state = {
          name: '',
          email: '',
          age: '',
          anecdote:'',
          checkbox: false,
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
          [name]: value,
        });
    }
    
    render() {
    const { email, name, age, anecdote, checkbox } = this.state;
    
        return (
          <div>
            <h1>
              Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
            </h1>
            <form className="form">
                <fieldset>
                    <legend>
                        Informações pessoais
                    </legend>
               
                    <label htmlFor="name">
                        Nome:
                        <input 
                        id="name" 
                        name="name" 
                        type="text"
                        onChange={ this.handleChange }
                        value={ name }
                        />
                    </label>
            
                    <label htmlFor="email">
                        Email:
                        <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={this.handleChange}
                        value={email}
                        />
                    </label>
            
                    <label htmlFor="age">
                        Idade:
                        <select 
                            id="age" 
                            name="age" defaultValue=""
                            onChange={ this.handleChange }
                            value={age}
                        >
                        <option value="">Selecione</option>
                        <option value="adult">Maior que 18</option>
                        <option value="underage">Menor que 18</option>
                        </select>
                    </label>
                </fieldset>
    
                <label htmlFor="anecdote">
                Anedota:
                <textarea
                    id="anecdote" 
                    name="anecdote"
                    onChange={ this.handleChange }
                    value={ anecdote }
                />
              </label>
              <label htmlFor="checkbox">
                <input
                    id="checkbox" 
                    name="checkbox"
                    onChange={ this.handleChange }
                    value={ checkbox }
                />
                Concordo com termos e acordos
              </label>

              <input type="file" />
            </form>
          </div>
        );
    }
}

export default Form;
