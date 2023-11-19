/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Box } from "@mui/material";
import SelectClassDate from "../SelectClassDate";
import SelectClass from "../SelectClass";
import ClassDetails from "../ClassDetails";
import SelectPaymentType from "../SelectPaymentType";
import { useRouter } from "next/navigation";

interface course {
  courseDetails: Object;
}

export default function SelectClassComponent({ courseDetails }: course) {
  const [value, setValue] = useState("1");
  const [isDisabled, setIsDisabled] = useState(true);
  const [openClassDate, setOpenClassDate] = useState(false);
  const [dateValue, setDateValue] = useState("0");
  const [openClassDetails, setOpenClassDetails] = useState(false);
  const [openPaymentType, setOpenPaymentType] = useState(false);
  const [paymentTypeValue, setPaymentTypeValue] = useState("0");

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentTypeValue((event.target as HTMLInputElement).value);
  };

  const handleOpenPaymentType = () => {
    setOpenPaymentType(true);
    setOpenClassDetails(false);
  };

  const handleClosePaymentType = () => {
    setOpenPaymentType(false);
    setOpenClassDetails(true);
  };

  const handleOpenClassDetails = () => {
    setOpenClassDetails(true);
    setOpenClassDate(false);
  };

  const handleCloseClassDetails = () => {
    setOpenClassDetails(false);
  };

  const handleOpenClassDate = () => {
    setOpenClassDate(true);
  };

  const handleCloseClassDate = () => {
    setOpenClassDate(false);
    setDateValue("0");
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue((event.target as HTMLInputElement).value);
  };

  const handleSelectDate = () => {
    setOpenClassDate(false);
    setIsDisabled(false);
  };

  const handleOpenPayment = () => {
    if (paymentTypeValue === "3") {
      router.push("/bank-transaction");
    }
  };

  return (
    <Box sx={{ boxShadow: 10, px: 3 }} height={1050} textAlign="center">
      {openClassDate ? (
        <SelectClassDate
          dateValue={dateValue}
          handleChangeDate={handleChangeDate}
          handleClose={handleCloseClassDate}
          handleSelectDate={handleSelectDate}
        />
      ) : openClassDetails ? (
        <ClassDetails
        classDetails={courseDetails}
          handleClose={handleCloseClassDetails}
          handleOpenPaymentType={handleOpenPaymentType}
        />
      ) : openPaymentType ? (
        <SelectPaymentType
          paymentTypeValue={paymentTypeValue}
          handleChangePaymentMethod={handleChangePaymentMethod}
          handleClose={handleClosePaymentType}
          handleSelectPaymentMethod={handleOpenPayment}
        />
      ) : (
        <SelectClass
          value={value}
          handleChange={handleChange}
          handleOpenClassDate={handleOpenClassDate}
          isDisabled={isDisabled}
          handleOpenClassDetails={handleOpenClassDetails}
        />
      )}
    </Box>
  );
}
