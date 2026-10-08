package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FaqScreen(onCreate:()->Unit){Card{Column{Text("Faq");Text("Domain-specific faq workflow");Button(onClick=onCreate){Text("Create")}}}}
