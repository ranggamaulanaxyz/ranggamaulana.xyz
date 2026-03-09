export default function Placeholder({ placeholder }: { placeholder: string}) {
    return (
        <div className='absolute top-0 left-0 text-gray-400 pointer-events-none italic'>{placeholder}</div>
    )
}