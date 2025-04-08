import { useParams } from 'react-router-dom';

function TemplateForm() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-3xl border-t-8 border-red-500">
        <h1 className="text-2xl font-bold text-red-800 mb-4">Filling Template: {id}</h1>
        <p className="text-gray-600">This is a placeholder for the form corresponding to template ID: {id}.</p>
        {/* We'll dynamically render a form based on template ID here */}
      </div>
    </div>
  );
}

export default TemplateForm;