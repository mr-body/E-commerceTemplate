import { useFormContext } from 'react-hook-form';

export default function Step4FinalStep() {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      <div>
        <label>Objetivo</label>
        <input {...register('objective')} />
      </div>
      <div>
        <label>Fonte de indicação</label>
        <input {...register('referralSource')} />
      </div>
      <div>
        <label>Nível de experiência</label>
        <select {...register('experienceLevel')}>
          <option value="">Selecione</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div>
        <label>Interesses</label>
        <input {...register('interests')} placeholder="Ex: Tecnologia, Educação" />
      </div>
    </div>
  );
}
