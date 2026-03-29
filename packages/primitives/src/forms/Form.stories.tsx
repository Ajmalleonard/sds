import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form, ErrorMessage } from './Form';
import { Input, Label } from '../Input';
import { Button } from '../Button';

const meta = {
  title: 'Primitives/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {} as any,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    alert(JSON.stringify(data, null, 2));
  });

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1.5">
        <Label slug="email">Email</Label>
        <Input 
          id="email" 
          placeholder="email@example.com" 
          {...form.register('email', { required: 'Email is required' })} 
        />
        <ErrorMessage name="email" className="mt-1" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label slug="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="••••••••" 
          {...form.register('password', { required: 'Password is required' })} 
        />
        <ErrorMessage name="password" className="mt-1" />
      </div>

      <Button type="submit" variant="default" className="mt-2">
        Sign In
      </Button>
    </Form>
  );
};

export const Basic: Story = {
  render: () => <LoginForm />,
};

const ValidationForm = () => {
  const form = useForm({
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    alert('Form submitted: ' + data.username);
  });

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-4 w-80">
      <div className="flex flex-col gap-1.5">
        <Label slug="username">Username</Label>
        <Input 
          id="username" 
          placeholder="Choose a username" 
          {...form.register('username', { 
            required: 'Username is required',
            minLength: { value: 3, message: 'Username must be at least 3 characters' }
          })} 
        />
        <ErrorMessage name="username" className="mt-1" />
      </div>
      <Button type="submit" variant="default">
        Submit
      </Button>
    </Form>
  );
};

export const WithValidation: Story = {
  render: () => <ValidationForm />,
};

const DisabledForm = () => {
  const form = useForm({ defaultValues: { test: 'Locked value' } });
  return (
    <Form 
      form={form} 
      disabled 
      className="flex flex-col gap-4 w-80"
    >
      <div className="flex flex-col gap-1.5">
        <Label slug="test">Disabled Field</Label>
        <Input id="test" defaultValue="Locked value" disabled />
      </div>
      <Button variant="default" disabled>
        Submit
      </Button>
    </Form>
  );
};

export const Disabled: Story = {
  render: () => <DisabledForm />,
};
