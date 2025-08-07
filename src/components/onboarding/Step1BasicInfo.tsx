import { useFormContext } from 'react-hook-form';

export default function Step1BasicInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Nome completo</label>
        <input {...register('name', { required: true })} />
      </div>
      <div>
        <label>Username</label>
        <input {...register('username')} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
    </div>
  );
}
