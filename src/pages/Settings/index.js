import React, { useEffect, useState } from "react";
import { Form, Input, Card, Button } from "antd";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const Settings = () => {
  const [address, setAddress] = useState(null);
  const [coordinate, setCoordinate] = useState(null);

  const getAddressCoordinate = async (address) => {
    setAddress(address);
    const decodedAddress = await geocodeByAddress(address.label);
    console.log("decodedAddress", decodedAddress);

    const latLng = await getLatLng(decodedAddress[0]);
    setCoordinate(latLng);
  };

  useEffect(()=>{
    console.log('address, coordinate', address, coordinate)
  },[address, coordinate])

  return (
    <Card title="Restauran Details" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 10 }}>
        <Form.Item label="Restaurant Name" required>
          <Input placeholder="Enter Restaurant Name" />
        </Form.Item>
        <Form.Item label="Restaurant Address" required>
          <GooglePlacesAutocomplete
            selectProps={{ value: address, onChange: getAddressCoordinate }}
            apiKey={process.env.REACT_APP_GOOGLE_API}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      <span>
        {coordinate?.lat} - {coordinate?.lng}
      </span>
    </Card>
  );
};

export default Settings;
// AIzaSyBytJlnRFaWIUjZ3_77zPABb8MPk6afsuU
