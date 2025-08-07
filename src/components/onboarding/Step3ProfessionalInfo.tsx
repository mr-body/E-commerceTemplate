import { useFormContext } from 'react-hook-form';

export default function Step3ProfessionalInfo() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Profissão</label>
        <input {...register('profession')} />
      </div>
      <div>
        <label>Bio</label>
        <textarea {...register('bio')} />
      </div>
    </div>
  );
}
