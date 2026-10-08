package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun LessonsScreen(onCreate:()->Unit){Card{Column{Text("Lessons");Text("Domain-specific lessons workflow");Button(onClick=onCreate){Text("Create")}}}}
