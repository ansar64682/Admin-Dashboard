import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductQuery } from "../../requests/product.requests";

import Header from "../../components/Header";
import { useState } from "react";
import Preloader from "../../components/PreLoader";

const Product = ({
  _id,
  name,
  price,
  description,
  category,
  rating,
  supply,
  stats,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        background: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "2rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "14" }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">{description}</Typography>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
            sx={{
              backgroundColor: theme.palette.secondary[500],
            }}
          >
            Show Details
          </Button>
        </CardActions>
        <Collapse
          in={isExpanded}
          timeout={"auto"}
          unmountOnExit
          sx={{
            color: theme.palette.neutral[300],
          }}
        >
          <CardContent>
            <Typography>ID : {_id}</Typography>
            <Typography>Units Remaining : {supply}</Typography>
            <Typography>
              Total Units Sold Current Year : {stats.yearlyTotalSoldUnits}
            </Typography>
            <Typography>Total Sales : {stats.yearlySalesTotal}</Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductQuery();
  console.log("Request send , Get 200 ....getProducts");
  console.log("🚀 data recived ~ Products ~  data:", data);

  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2rem">
      <Header title={"Products"} subtitle={"Products List"} />
      {data || !isLoading ? (
        <Box
          width="100%"
          mt={"20px"}
          display={"grid"}
          gridTemplateColumns={"repeat(4, minmax(0, 1fr))"}
          justifyContent={"space-between"}
          alignItems={"self-start"}
          rowGap={"20px"}
          columnGap={"1.33%"}
          sx={{
            "& > *": { gridColumn: isNonMobile ? undefined : "span 4" },
            overflowY: "auto",
          }}
        >
          {data.map(
            ({
              _id,
              name,
              price,
              description,
              category,
              rating,
              supply,
              stats,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                price={price}
                description={description}
                category={category}
                rating={rating}
                supply={supply}
                stats={stats}
              />
            )
          )}
        </Box>
      ) : (
        <Preloader />
      )}
    </Box>
  );
};

export default Products;
