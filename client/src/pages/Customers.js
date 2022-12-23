import React, { useEffect, useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';
function Customers() {
  const componentRef = useRef();
  const [billsData, setBillsData] = useState([]);

  const dispatch = useDispatch();
  const getAllBills = () => {
    dispatch({ type: "showLoading" });
    axios
      .get("/api/bills/get-all-bills")
      .then((response) => {
        dispatch({ type: "hideLoading" });
        const data = response.data
        data.reverse()
        setBillsData(data);
      })
      .catch((error) => {
        dispatch({ type: "hideLoading" });
        console.log(error);
      });
  };

  const columns = [
    {
      title: "Patient",
      dataIndex: "patientName",
    },
    {
      title: "Phone Number",
      dataIndex: "patientPhoneNumber",
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      render: (value) => <span>{value.toString().substring(0, 10)}</span>
    },
    {
      title: "Share",
      render: (value) => <a href="https://strong-truffle-c55cc1.netlify.app/?room_id=6tgqgo7cm">Click Here</a>
    },


  ];


  useEffect(() => {
    getAllBills();
  }, []);



  return (
    <DefaultLayout>
      <div className="d-flex justify-content-between">
        <h3>Patients</h3>
      </div>
      <Table columns={columns} dataSource={billsData} bordered />


    </DefaultLayout>
  );
}

export default Customers;
