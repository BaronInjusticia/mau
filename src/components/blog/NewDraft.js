import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const NewDraft = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="Title of note" />
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea placeholder="Something to share" />
        </FormGroup>

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Create Draft
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewDraft.defaultProps = {
  title: "Quick Note"
};

export default NewDraft;