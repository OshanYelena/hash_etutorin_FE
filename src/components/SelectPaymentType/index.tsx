import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface PaymentMethodsProps {
  id: string;
  label: string;
  image?: string;
}
const paymentMethods: PaymentMethodsProps[] = [
  {
    id: "1",
    label: "Pay Here",
    image: "/images/payhere-logo.png",
  },
  {
    id: "2",
    label: "Stripe",
    image: "/images/stripe-logo.png",
  },
  {
    id: "3",
    label: "Direct Bank Transaction",
  },
];

interface SelectPaymentTypeProps {
  handleChangePaymentMethod?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleSelectPaymentMethod?: () => void;
  handleClose?: () => void;
  paymentTypeValue?: string;
}

export default function SelectPaymentType({
  paymentTypeValue,
  handleClose,
  handleChangePaymentMethod,
  handleSelectPaymentMethod,
}: SelectPaymentTypeProps) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (paymentTypeValue !== "0") {
      setIsDisabled(false);
    }
  }, [paymentTypeValue]);

  return (
    <Box pt={2} pb={5}>
      <Box sx={{ justifyContent: "flex-end", display: "flex" }}>
        <IconButton onClick={handleClose}>
          <CloseOutlinedIcon sx={{ color: "#000" }} />
        </IconButton>{" "}
      </Box>
      <Typography
        variant="h5"
        gutterBottom
        color="#ADADAD"
        sx={{ fontSize: "1.5rem", fontWeight: 600, pt: 10 }}
      >
        {" "}
        Select &nbsp;
        <Box color="primary.main" display="inline" sx={{ fontWeight: 800 }}>
          Your PaymentType
        </Box>
      </Typography>
      <Box py={5}>
        <RadioGroup
          aria-labelledby="classes-radio-group"
          name="classes-radio-buttons-group"
          value={paymentTypeValue}
          onChange={handleChangePaymentMethod}
        >
          {paymentMethods.map((paymentMethod, index) => (
            <Box
              key={index}
              sx={{
                ":hover": {
                  border: 2,
                  borderColor: "primary.main",
                  my: 1,
                },
                borderRadius: 2,
                border: paymentTypeValue === paymentMethod.id ? 2 : 0,
                borderColor: "primary.main",
                py: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                container
                spacing={2}
                px={5}
                sx={{
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Grid item xs={1}>
                  <FormControlLabel
                    value={paymentMethod.id}
                    control={
                      <Radio
                        icon={
                          <RadioButtonUncheckedRoundedIcon
                            sx={{
                              color: "primary.main",
                            }}
                          />
                        }
                        checkedIcon={
                          <RadioButtonCheckedRoundedIcon
                            sx={{
                              color: "primary.main",
                            }}
                          />
                        }
                      />
                    }
                    label=""
                  />
                </Grid>
                <Grid item xs={10}>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    role="button"
                    sx={{
                      //   ":hover": {
                      //     color:
                      //       paymentTypeValue === paymentMethod.id
                      //         ? "#808080"
                      //         : "primary.main",
                      //   },
                      color:
                        paymentTypeValue === paymentMethod.id
                          ? "primary.main"
                          : "#808080",
                    }}
                  >
                    <Typography variant="body1" fontSize={18}>
                      {paymentMethod.label}
                    </Typography>
                    {paymentMethod.image && (
                      <img src={paymentMethod.image} alt="logo" />
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </RadioGroup>
      </Box>
      <Box display="flex" justifyContent="center" pt={30}>
        <Box
          sx={{
            borderRadius: 2,
            backgroundColor: isDisabled ? "#2E72B359" : "primary.main",
          }}
          className="w-80 "
        >
          <Button
            color="info"
            size="medium"
            variant="contained"
            disabled={isDisabled}
            onClick={handleSelectPaymentMethod}
            sx={{
              textTransform: "none",
              lineHeight: 1.5,
              borderRadius: 2,
              backgroundColor: "primary.main",
            }}
            className="w-80 py-2"
          >
            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ fontWeight: 500, fontSize: "1.1rem" }}
            >
              Continue
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
