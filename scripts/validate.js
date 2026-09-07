import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, "../verified.json");

try {
  const content = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(content);

  if (!data.verified || !Array.isArray(data.verified)) {
    console.error("❌ Error: verified.json must contain a 'verified' array.");
    process.exit(1);
  }

  const duplicates = data.verified.filter(
    (item, index) => data.verified.indexOf(item) !== index
  );

  if (duplicates.length > 0) {
    console.error("❌ Error: Duplicate plugin entries found in verified.json:", duplicates);
    process.exit(1);
  }

  // Check that all items are non-empty strings
  const invalid = data.verified.filter((item) => typeof item !== "string" || !item.trim());
  if (invalid.length > 0) {
    console.error("❌ Error: Invalid entries found (must be non-empty strings):", invalid);
    process.exit(1);
  }

  console.log(`✅ Success: verified.json is valid with ${data.verified.length} verified plugins.`);
} catch (err) {
  console.error("❌ Error parsing verified.json:", err.message);
  process.exit(1);
}
