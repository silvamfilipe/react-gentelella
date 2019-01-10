import React, { Component } from 'react';
import { Formik } from 'formik';
import { Panel, PanelHeader, PanelBody, Form, StarRating } from 'react-gentelella';
import GeneralPanelToolbox from '../../app/general-panel-toolbox'
import CodeSample from '../../app/code-sample'
import Highlight from 'react-highlight'

class StarRatingExample extends Component {

  state = {
    showCode: false
  };

  renderCodeSample = () => {
    const { showCode } = this.state;
    return (
      <CodeSample open={showCode}>
        <Highlight language="javascript">
          {
            "import React from 'react';\n" +
            "import { Form, StarRating } from 'react-bootstrap';\n" +
            "\n" +
            "const handleSubmit = values => {\n" +
            "  // do something with submitted values.\n" +
            "};\n" +
            "\n" +
            "const FormExample = () => (\n" +
            "  <Form onSubmit={ handleSubmit }>\n" +
            "    <StarRating\n" +
            "      name=\"rating2\"\n" +
            "      helpText=\"You gave a rating of %d star(s)\"\n" +
            "    />\n" +
            "      \n" +
            "    <StarRating\n" +
            "      name=\"rating1\"\n" +
            "      readOnly\n" +
            "      value={ 3.7 }\n" +
            "      helpText=\"You gave a rating of %d star(s)\"\n" +
            "    />  \n" +
            "  </Form>\n" +
            ");\n" +
            "\n" +
            "export default FormExample;\n"
          }
        </Highlight>
      </CodeSample>
    );
  };
  render() {
    return (
      <Panel>
        <PanelHeader>
          <h2>Star Rating</h2>
          <GeneralPanelToolbox onCodeClick={ () => this.setState({showCode: !this.state.showCode})}/>
        </PanelHeader>
        <PanelBody>
          { this.renderCodeSample() }
          <h4>Star Ratings<small> Click on a star</small></h4>
          <Formik
            onSubmit={ values => {
              console.log(values)
            }}
            render={ props => (
              <Form onSubmit={ props.handleSubmit }>
                <StarRating name="rating2" formProps={ props } helpText="You gave a rating of %d star(s)" />
                <p>Also you can give a default rating by adding attribute value</p>
                <StarRating name="rating1" readOnly value={ 3.7 } helpText="You gave a rating of %d star(s)" />
              </Form>
            )}
          />
        </PanelBody>
      </Panel>
    );
  }
}

export default StarRatingExample;
