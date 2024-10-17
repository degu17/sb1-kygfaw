import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Stethoscope,
  Languages,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('vi');
  const [selectedStyle, setSelectedStyle] = useState('polite style');

  const handleTranslate = () => {
    // This is a placeholder for the actual translation logic
    // In a real app, this would call an API or use a translation library
    setOutputText(`Translated: ${inputText}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold flex items-center">
              <Stethoscope className="mr-2" />
              医療・介護翻訳アシスタント
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="w-80">
                  <div className="space-y-2">
                    <h3 className="font-semibold">使い方</h3>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>言語とスタイルを選択します。</li>
                      <li>翻訳したいテキストを入力欄に入力します。</li>
                      <li>「翻訳する」ボタンをクリックします。</li>
                      <li>翻訳結果が下の欄に表示されます。</li>
                    </ol>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CardDescription>
            外国人労働者のための直感的な翻訳アプリ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Languages className="h-5 w-5" />
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="言語を選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vi">ベトナム語</SelectItem>
                  <SelectItem value="en">英語</SelectItem>
                  <SelectItem value="zh">中国語</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="polite style">Polite</SelectItem>
                  <SelectItem value="casual style">style</SelectItem>
                  <SelectItem value="SOAP format">SOAP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="ここに翻訳したいテキストを入力してください"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[100px]"
            />
            <Button onClick={handleTranslate} className="w-full">
              翻訳する
            </Button>
            <Textarea
              placeholder="翻訳結果がここに表示されます"
              value={outputText}
              readOnly
              className="min-h-[100px]"
            />
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>注意</AlertTitle>
              <AlertDescription>
                翻訳結果は自動生成されたものです。重要な医療情報の場合は、必ず人間のチェックを受けてください。
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          © 2023 医療・介護翻訳アシスタント
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
