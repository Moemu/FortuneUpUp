import re,os

def GetCharacterSubset():
    with open('FortuneUpUp.js', 'r',encoding='utf-8') as f:
        js_text = f.read()
    # 去除单行注释
    js_text = re.sub(r'//.*?\n', '', js_text)
    # 去除多行注释
    js_text = re.sub(r'/\*.*?\*/', '', js_text, flags=re.DOTALL)
    # 提取中英文文本
    text_pattern = re.compile(r'[\u4e00-\u9fa5]+')
    text_list = re.findall(text_pattern, js_text)
    text_set = set(text_list)
    text_set = ''.join(text_set) + '0123456789' + 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    with open('text_set.txt', 'w',encoding='utf-8') as f:
        f.write(text_set)

def CompressFont(text_set):
    os.system('pyftsubset XiaolaiSC-Regular.ttf --text-file=text_set.txt --flavor=woff2 --output-file=font/XiaolaiSC-Tiny.woff2'.format(text_set))
    return None

if __name__ == '__main__':
    text_set = GetCharacterSubset()
    CompressFont(text_set)