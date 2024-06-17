export default function TopTypeSelect({
  handleMode,
}: {
  handleMode: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select
      defaultValue=""
      onChange={handleMode}
      className="select select-bordered select-sm w-1/2 max-w-24"
    >
      <option disabled value="">
        Type
      </option>
      <option value="artists">Artists</option>
      <option value="tracks">Tracks</option>
    </select>
  );
}
