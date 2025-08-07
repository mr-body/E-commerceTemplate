import { useFormContext } from 'react-hook-form';

export default function Step2ContactInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Telefone</label>
        <input {...register('phoneNumber')} />
      </div>
      <div>
        <label>País</label>
        <input {...register('country')} />
      </div>
      <div>
        <label>Estado</label>
        <input {...register('state')} />
      </div>
      <div>
        <label>Cidade</label>
        <input {...register('city')} />
      </div>
    </div>
  );
}
