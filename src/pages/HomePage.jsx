import { Box, Button, Dialog, Flex, Table, TabNav, Text, TextField, Tooltip } from '@radix-ui/themes';
import { useState } from 'react';
import { Plus } from 'lucide-react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
const HomePage = () => {
  const [active, setActive] = useState('today')
  const options = [
    {
      id: 1, label: "Today", value: "today",
    },
    {
      id: 2, label: 'Tommorrow', value: "tommorrow"
    }
  ]
  const headers = [{ id: "1", label: "SI.No" }, { id: "2", label: "Name" }, { id: "3", label: "Age" }, { id: "4", label: "Mobile" }]
  const data = [
    { id: 1, name: "John Doe", age: 29, mobile: "123-456-7890", status: "today" },
    { id: 2, name: "Jane Smith", age: 34, mobile: "987-654-3210", status: "tommorrow" },
    { id: 3, name: "Alice Johnson", age: 42, mobile: "555-555-5555", status: "today" },
  ]
  const initialValues ={
    username:"",
    age:"",
    mobile:""
  }
  const validationSchema = Yup.object({
    username:Yup.string().required("Username is required"),
    age:Yup.string().required("Age is required")
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit:(values)=>{
      console.log(values)
    }
  })



  return (
    <Box>
      <Flex justify="end" align="center" mb="20px" >

        <Dialog.Root>
          <Dialog.Trigger>
            <Button radius='small' className=' !cursor-pointor'>Add Contact</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Add a new contact</Dialog.Title>
            <Dialog.Description>
              Please fill in the details of the new contact.
            </Dialog.Description>
            <Flex direction="column" gap="3" my="4" className='!p-15px'>
              <label htmlFor="Name">
                <Text as="div" size="2" mb="1" weight="bold">Name</Text>
                <TextField.Root
                  name="name"
                  placeholder='Enter Your Name'
                  value={formik.values.username}
              
                  radius='small'
                  onChange={formik.handleChange}
                />
              </label>
            </Flex>
            <Flex justify="end">


              <Dialog.Close className='!my-5 !mr-5'>
                <Button variant='outline'>Close</Button>
              </Dialog.Close>
              <Dialog.Close className='!my-5'>

                <Button variant='primary' onClick={formik.handleSubmit}>Save </Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>

      <TabNav.Root>
        {
          options.length && options.map((option) => (
            <TabNav.Link key={option?.id} href="#" active={active === option?.value} onClick={() => setActive(option?.value)}>
              {option.label}
            </TabNav.Link>
          ))
        }
      </TabNav.Root>

      <Table.Root >
        <Table.Header>
          <Table.Row>
            {
              headers.length && headers.map((header) => (
                <Table.ColumnHeaderCell key={header?.id} align='center'>
                  {header?.label}
                </Table.ColumnHeaderCell>
              ))
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            data.length && data.filter((item) => item.status === active).map((item) => (

              <Table.Row key={item.id}>
                <Table.Cell align='center'>{item.id}</Table.Cell>
                <Table.Cell align='center'>{item.name}</Table.Cell>
                <Table.Cell align='center'>{item.age}</Table.Cell>
                <Table.Cell align='center'>{item.mobile}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table.Root>
    </Box>
  )
}

export default HomePage
