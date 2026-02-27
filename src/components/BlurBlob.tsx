
// 🔹 Types
interface Position {
  top: string;
  left: string;
}

interface Size {
  width: string;
  height: string;
}

interface BlurBlobProps {
  position: Position;
  size: Size;
}

export default function BlurBlob({ position, size }: BlurBlobProps) {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
}