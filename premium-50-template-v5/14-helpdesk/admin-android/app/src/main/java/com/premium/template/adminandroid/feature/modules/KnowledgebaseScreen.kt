package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun KnowledgebaseScreen(onCreate:()->Unit){Card{Column{Text("Knowledgebase");Text("Domain-specific knowledgebase workflow");Button(onClick=onCreate){Text("Create")}}}}
