import SaveCancelButtons from "@/components/button-group/SaveCancelButtons";
import { Form } from "semantic-ui-react";

const EntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>

      <SaveCancelButtons />
    </Form>
  );
};

export default EntryForm;
