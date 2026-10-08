package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun KnowledgebaseScreen(onCreate:()->Unit){Card{Column{Text("Knowledgebase");Text("Domain-specific knowledgebase workflow");Button(onClick=onCreate){Text("Create")}}}}
