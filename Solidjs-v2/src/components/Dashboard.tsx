import { notificationService, Button, Alert } from "@hope-ui/solid";
import "../../../Solidjs-v1/src/components/TodoList.module.css";

export default function Dashboard() {
  const showNotification = () => {
    notificationService.show({
      // loading: true,
      status: "success",
      title: "Default notification",
      description: "Hey there, your code is awesome! 🤥",
    });
  };
  return (
    <>
      <div>
        <h1>Upload File</h1>
        <section
          class="image"
          style="display: flex;
justify-content: center;"
        >
          <img
            onClick={showNotification}
            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2015/11/drag-drop-upload-2.gif"
          />
          {/* <input type="file"></input> */}
        </section>
        <br />
        {/* <Button onClick={showNotification}>Show notification</Button> */}
        {/* <Alert status="success">This is a success alert — check it out!</Alert> */}
      </div>
    </>
  );
}
