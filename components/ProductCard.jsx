import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("gray.100", "gray.700");

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deleteProduct, updateProduct } = useProductStore();
  const toast = useToast();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="md"
      rounded="md"
      overflow="hidden"
      transition="all 0.2s"
      _hover={{ transform: "scale(1.05)", shadow: "lg" }}
      bg={bgColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={50}
        w="full"
        objectFit={"cover"}
      />
      <Box p={5}>
        <Heading
          as={"h3"}
          fontWeight={"bold"}
          size={"md"}
          mb={3}
          color={textColor}
        >
          {" "}
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} mb={3} color={textColor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit"
            colorScheme="purple"
            onClick={onOpen}
          />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDeleteProduct(product._id)}
            aria-label="Delete"
            colorScheme="red"
          />
        </HStack>
      </Box>
      {/* modal  */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Enter New Name"
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Enter New Price"
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Enter new Image"
                value={updatedProduct.image}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    image: e.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleUpdateProduct(product._id, updatedProduct)}
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;